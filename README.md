<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## SEA Salon Project 

Ini merupakan project technical challange untuk proses seleksi participant compfest academy 2024. 
Disini, framework maupun library yang saya gunakan untuk membangun project ini terdiri dari Vite.js, React.js, Inertia.js, Laravel, Laravel Breeze, dan Tailwind.
Adapun fitur dari website ini adalah sebagai berikut :
- Tampilan user interface yang responsive pada perangkat mobile phone maupun pc/laptop
- Sistem autentikasi login-register user
- Sistem autentikasi untuk admin
- Integrasi database untuk data authorisasi
- Integrasi database untuk sistem reservasi dan sistem review


## Langkah - langkah set up 

Untuk menjalankan project ini, terdapat beberapa langkah yang perlu untuk dilakukan.
Disini, saya asumsikan bahwa pengguna telah menginstall node.js, composer, dan vite.js. 
Dan juga pengguna telah memiliki xampp untuk menjalankan server apache dan mysql.
1. start server apache dan mysql pada xampp
2. ubah nama file '.env.example' menjadi '.env'
3. ubah nilai pada bagian DB_CONNECTION dari sqlite menjadi mysql
4. un-comment DB_HOST hingga DB_PASWWORD
5. pada DB_DATABASE ubah nilai menjadi salon (nama database dari project ini)
6. install composer dengan cara menjalankan perintah "composer install" pada terminal
7. install vite dengan cara menjalankan perintah "npm i vite"
8. pada terminal, jalankan perintah "php artisan key:generate"
9. pada terminal, jalankan perintah "php artisan migrate" untuk mengenerate tabel-tabel yang diperlukan
10. Jalankan server dengan cara "php artisan serve"

## Manipulasi role admin dan user

Dalam website ini, terdapat 2 role berupa admin dan user biasa dan setiap akun hanya dapat memiliki salah satunya.
Pada tabel users, akan terdapat attribute bernama roles yang memiliki nilai berupa integer dengan nilai 1 atau 0.
Angka 1 mengindikasian role user sebagai admin sedangkan angka 0 berarti hanya sebagai user biasa.
Untuk dapat mengubah nilai role akun sebagai admin, maka ubah nilai dari 'roles' pada bagian RegisteredUserController menjadi angka 1.
Dengan akun yang memiliki nilai roles 1, maka mereka memiliki akses pada halaman-halaman admin.
