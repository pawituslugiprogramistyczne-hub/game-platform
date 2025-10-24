/*
  # Create Games Table

  ## Overview
  This migration sets up the foundational Games table for the Friends' Party Game Hub.
  This table stores metadata about all available party games on the platform.

  ## New Tables
  
  ### `games`
  Main table for storing game information
  - `id` (uuid, primary key) - Unique identifier for each game
  - `name` (text, unique, not null) - Display name of the game (e.g., "Taboo Challenge")
  - `description` (text) - Short description of the game shown on game cards
  - `image_url` (text) - Optional URL to game card image
  - `path` (text, unique, not null) - URL path for the game (e.g., "/games/taboo")
  - `created_at` (timestamptz) - Timestamp when game was added to the platform

  ## Security
  - Enable Row Level Security (RLS) on `games` table
  - Add policy for public read access (all users can view available games)
  - No insert/update/delete policies needed initially (games will be managed by admin/seeding)

  ## Notes
  1. Games are read-only for public users by default
  2. Future migrations can add admin policies for game management
  3. Individual game logic and scoring tables will be added in separate migrations
*/

-- Create games table
CREATE TABLE IF NOT EXISTS games (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text,
  image_url text,
  path text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE games ENABLE ROW LEVEL SECURITY;

-- Allow all users (including anonymous) to view games
CREATE POLICY "Anyone can view games"
  ON games
  FOR SELECT
  USING (true);

-- Insert initial sample games
INSERT INTO games (name, description, path) VALUES
  ('Taboo Challenge', 'Describe words without using forbidden terms. Test your creativity and quick thinking!', '/games/taboo'),
  ('P-Word Game', 'A fun and challenging word guessing game perfect for parties.', '/games/p-word')
ON CONFLICT (name) DO NOTHING;