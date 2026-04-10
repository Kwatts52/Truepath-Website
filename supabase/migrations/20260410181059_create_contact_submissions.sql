/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `phone` (text, optional)
      - `email` (text, optional)
      - `service_type` (text, optional)
      - `message` (text, required)
      - `created_at` (timestamptz, defaults to now)

  2. Security
    - Enable RLS on `contact_submissions`
    - Add INSERT policy for anonymous users (public form submissions)
    - No SELECT/UPDATE/DELETE policies for public users — only service role can read submissions

  3. Notes
    - This table stores quote requests and messages from the website contact form
    - Anonymous users can insert but cannot read, update, or delete any rows
    - Service role key (used server-side or via Supabase dashboard) can manage all rows
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text DEFAULT '',
  email text DEFAULT '',
  service_type text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
