<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;
use App\Models\Reservation;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function index() : Response
    {
        return Inertia::render('Admin/AdminDashboard', [
            'reviews' => Review::all(),
            'reservations' => Reservation::all()
        ]);
    }
}
