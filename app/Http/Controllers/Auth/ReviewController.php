<?php

namespace App\Http\Controllers\Auth;

use App\Models\Review;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Auth/Review');
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
    public function store(Request $request)
    {
        $user = auth()->user();

        $request->validate([
            'branch' => 'required|string|max:255',
            'rating' => 'required|numeric|digits:10',
            'review' => 'required|string',

        ]);

        $review = Review::create([
            'branch' => $request->branch,
            'rating' => $request->rating,
            'review' => $request->review,
            'userId' => $user->id
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Review $review)
    {
        $reviews = Review::with('user')->get();
        $users = User::all();
        return view('admin.review', [
            'feedbacks' => $feedbacks,
            'users' => $users
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Review $review)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Review $review)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Review $review)
    {
        //
    }
}
