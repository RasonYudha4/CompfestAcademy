<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Review;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Review', [
            'reviews' => Review::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Auth/Review');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) : RedirectResponse
    {
        $user = auth()->user();

        $request->validate([
            'branch' => 'required|string|max:255',
            'rating' => 'required|numeric|min:0|max:5',
            'review' => 'required|string',

        ]);

        $review = Review::create([
            'branch' => $request->branch,
            'rating' => $request->rating,
            'review' => $request->review,
            'userId' => $user->id
        ]);

        return redirect(route('home'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Review $review)
    {
        $review->delete();
    }
}
