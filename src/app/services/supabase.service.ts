
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  // Subir archivo a Supabase Storage
  async uploadFile(bucket: string, file: File, filePath: string) {
    const { data, error } = await this.supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) throw error;
    return data;
  }

  // Obtener URL pública
  getPublicUrl(bucket: string, filePath: string) {
    return this.supabase.storage
      .from(bucket)
      .getPublicUrl(filePath).data.publicUrl;
  }
}