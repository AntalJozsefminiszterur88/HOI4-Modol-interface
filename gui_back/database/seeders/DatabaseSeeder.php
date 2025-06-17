<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        DB::table('users')->insert([
            'username' => 'Sussy user',
            'email' => 'test@example.com',
            'password' => Hash::make('sussybaka'), // always hash passwords!
            'phone_number' => '1234567890',
            'date_of_birth' => '2020-01-01',
            'role' => 'admin',
            'bio' => 'This is a test user',
            'banner' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPolrAoErOeYglNHFrXmuFLvLnsyzPkVhrgQ&s',
            'profile_picture' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPolrAoErOeYglNHFrXmuFLvLnsyzPkVhrgQ&s',
            'gender' => true,
            'online_status' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('media_types')->insert([
            'name' => 'picture'
        ]);
        DB::table('media_types')->insert([
            'name' => 'gif'
        ]);

        DB::table('medias')->insert([
            'img_url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVyiGFYIoPgISVR15LFQN1ZU054xBxfkHOfA&s',
            'uploader' => 1,
            'type' => 1,
            'original_url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVyiGFYIoPgISVR15LFQN1ZU054xBxfkHOfA&s',
        ]);



    }
}
