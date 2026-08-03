import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Contact from './models/Contact.js';
import Booking from './models/Booking.js';

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    console.log('🧹 Clearing existing test data...');
    await Contact.deleteMany();
    await Booking.deleteMany();

    console.log('🌱 Inserting sample test data into MongoDB Atlas...');

    const sampleBooking = await Booking.create({
      customerName: 'Nguyễn Văn Thịnh',
      phone: '0988776655',
      email: 'thinh@example.com',
      pickupAddress: '123 Đường Nguyễn Trãi, Quận 1, TP.HCM',
      pickupDate: '2026-08-04 09:00 AM',
      services: ['Giặt sấy quần áo', 'Giặt hấp Vest'],
      totalAmount: 180000,
      status: 'PENDING',
      notes: 'Lấy đồ buổi sáng giùm tôi'
    });

    const sampleContact = await Contact.create({
      name: 'Trần Thị Tuấn',
      email: 'tuan@example.com',
      phone: '0912345678',
      subject: 'Hỏi về dịch vụ giặt rèm cửa',
      message: 'Shop có nhận giặt rèm cửa tận nhà không ạ? Giá tính theo kg hay m2?'
    });

    console.log('✅ Sample Booking created:', sampleBooking._id);
    console.log('✅ Sample Contact created:', sampleContact._id);
    console.log('🎉 Data successfully inserted into database: tlaundry!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding test data:', error.message);
    process.exit(1);
  }
};

seedData();
