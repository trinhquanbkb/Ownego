# ownego PHP Dev Test

Run
1.Có 2 thư mục là BE (chạy server đã cố định cổng chạy là 3000) và ownego (chạy giao diện nên chạy sau server)
2.cd sang BE cấu hình lại file config/config.json để đúng với cơ sở dữ liệu
   --`Tạo database`
     sequelize db:migrate
   --`Tạo file seed`	
     sequelize db:seed:all
   --`Run server`
     npm start (port 3000)
3.cd sang ownego và npm start

4.Chú ý: em đã test giao diện và hình ảnh giao diện được test có thể xem trong folder 'Demo'