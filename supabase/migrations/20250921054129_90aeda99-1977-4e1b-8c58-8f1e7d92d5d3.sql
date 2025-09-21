-- Fix RLS policies for contacts table
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policies for contacts table
CREATE POLICY "Anyone can insert contacts" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view contacts" 
ON public.contacts 
FOR SELECT 
USING (true);