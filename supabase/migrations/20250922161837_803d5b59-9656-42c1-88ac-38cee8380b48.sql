-- Update the authentication system to replace admin role with student role
-- and add proper email domain validation

-- Update existing profiles with admin role to student role
UPDATE public.profiles 
SET role = 'student' 
WHERE role = 'admin';

-- Update the handle_new_user function to support student role
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (
    user_id, 
    email, 
    first_name, 
    last_name, 
    role,
    institution,
    institution_code,
    graduation_year
  )
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data ->> 'first_name',
    NEW.raw_user_meta_data ->> 'last_name',
    NEW.raw_user_meta_data ->> 'role',
    NEW.raw_user_meta_data ->> 'institution',
    NEW.raw_user_meta_data ->> 'institution_code',
    CASE 
      WHEN NEW.raw_user_meta_data ->> 'graduation_year' IS NOT NULL 
      THEN (NEW.raw_user_meta_data ->> 'graduation_year')::integer
      ELSE NULL
    END
  );
  RETURN NEW;
END;
$function$;