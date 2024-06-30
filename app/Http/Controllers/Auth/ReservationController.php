<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\Reservation;
use Inertia\Inertia;
use Inertia\Response;

class ReservationController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Auth/Reservation');
    }

    public function store(Request $request) : RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|numeric|digits:10',
            'service' => 'required|string',
            'date' => 'required|string',
            'time' => 'required|string'
        ]);

        $reservation = Reservation::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'service' => $request->service,
            'date' => $request->date,
            'time' => $request->time
        ]);

        return redirect(route('home'));

    }
}
