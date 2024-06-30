<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\ReservationController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/aboutus', function () {
    return Inertia::render('About');
})->name('aboutus');

Route::get('/branches', function () {
    return Inertia::render('Branches');
})->name('branches');

Route::get('/services', function () {
    return Inertia::render('Services');
})->name('services');

Route::get('/admin/dashboard', [AdminController::class, 'index'])->
    middleware(['auth', 'admin']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/reserve', [ReservationController::class, 'create'])->name('reserve.show');
    Route::post('/reserve', [ReservationController::class, 'store'])->name('reserve.post');

    Route::get('/review', [ReviewController::class, 'create'])->name('review');
    Route::post('/review', [ReviewController::class, 'store'])->name('review.post');
});

require __DIR__.'/auth.php';
