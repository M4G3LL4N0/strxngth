"use client";

import { getSupabaseBrowserClient } from "./client";
import { getCurrentUser } from "./actions";

const BUCKET_NAME = "strxngth-user-assets";

export async function uploadUserFile(file: File, path: string) {
  const user = await getCurrentUser();

  if (!user) {
    return { data: null, error: "Not authenticated" };
  }

  const safePath = path.replace(/^\/+/, "");
  const finalPath = safePath.startsWith(`${user.id}/`)
    ? safePath
    : `${user.id}/${safePath}`;

  const supabase = getSupabaseBrowserClient();

  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(finalPath, file, {
      upsert: false,
    });

  if (error) {
    return { data: null, error: error.message };
  }

  return { data, error: null };
}

export async function getUserFileUrl(path: string) {
  const user = await getCurrentUser();

  if (!user) {
    return { data: null, error: "Not authenticated" };
  }

  const safePath = path.replace(/^\/+/, "");
  const finalPath = safePath.startsWith(`${user.id}/`)
    ? safePath
    : `${user.id}/${safePath}`;

  const supabase = getSupabaseBrowserClient();

  const { data } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(finalPath);

  return { data, error: null };
}
