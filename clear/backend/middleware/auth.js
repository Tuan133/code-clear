import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Verify JWT token middleware
export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'tlaundry_fallback_secret_key');
      req.user = await User.findById(decoded.id).select('-password');
      if (!req.user) {
        return res.status(401).json({ success: false, message: 'Người dùng không tồn tại!' });
      }
      return next();
    } catch (error) {
      return res.status(401).json({ success: false, message: 'Token không hợp lệ hoặc đã hết hạn!' });
    }
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Truy cập bị từ chối! Yêu cầu Token xác thực.' });
  }
};

// Admin/Staff only authorization middleware
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Quyền hạn '${req.user.role}' không được phép truy cập tài nguyên này!`
      });
    }
    next();
  };
};
