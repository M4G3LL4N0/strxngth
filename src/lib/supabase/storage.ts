import { supabase } from "./client";
import { getCurrentUser } from "./actions";

export async function uploadUserFile(file: File, path: string) {
  const user = await getCurrentUser();
  if (!user) throw new Error("User not authenticated");

  // Ensure path starts with user ID
  const fullPath = `${user.id}/${path}`;

  const { data, error } = await supabase.storage
    .from("strxngth-user-assets")
    .upload(fullPath, file);

  if (error) throw error;
  return data;
}

export async function getUserFileUrl(path: string) {
  const user = await getCurrentUser();
  if (!user) throw null;

  // Ensure path starts with user ID
  const fullPath = `${user.id}/${path}`;

  const { data } = await supabase.storage
    .from("strxngth-user-assets")
    .createSignedUrl(fullPath, 3600); // 1 hour expiration

  return data?.signedUrl;
}
