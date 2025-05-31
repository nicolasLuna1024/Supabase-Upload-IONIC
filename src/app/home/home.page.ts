import { Component, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SupabaseService } from '../services/supabase.service';
import { FileSizePipe } from '../pipes/file-size.pipe';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, FileSizePipe]
})
export class HomePage {
  @ViewChild('fileInput') fileInput!: ElementRef;
  
  selectedFile: File | null = null;
  uploadStatus = '';
  uploadSuccess = false;
  fileUrl: string | null = null;
  isUploading = false;
  uploadProgress = 0;
  isDragOver = false;

  private supabase = inject(SupabaseService);

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
      this.resetStatus();
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
    
    if (event.dataTransfer?.files?.length) {
      this.selectedFile = event.dataTransfer.files[0];
      this.resetStatus();
    }
  }

  clearFile() {
    this.selectedFile = null;
    this.resetStatus();
  }

  resetStatus() {
    this.uploadStatus = '';
    this.fileUrl = null;
  }

  async upload() {
    if (!this.selectedFile) return;

    this.isUploading = true;
    this.uploadProgress = 0;
    this.uploadStatus = '';
    this.uploadSuccess = false;

    try {
      // Simular progreso de subida (en un caso real, esto sería con eventos reales)
      const progressInterval = setInterval(() => {
        this.uploadProgress += 10;
        if (this.uploadProgress >= 90) clearInterval(progressInterval);
      }, 200);

      const filePath = `uploads/${Date.now()}_${this.selectedFile.name}`;
      await this.supabase.uploadFile('archivos', this.selectedFile, filePath);
      
      clearInterval(progressInterval);
      this.uploadProgress = 100;
      
      this.fileUrl = this.supabase.getPublicUrl('archivos', filePath);
      this.uploadStatus = '¡Archivo subido con éxito!';
      this.uploadSuccess = true;
    } catch (error) {
      console.error(error);
      this.uploadStatus = 'Error al subir el archivo: ' + (error as Error).message;
      this.uploadSuccess = false;
    } finally {
      this.isUploading = false;
    }
  }

  isImageFile(): boolean {
    return this.selectedFile?.type?.includes('image') || false;
  }

  isPDFFile(): boolean {
    return this.selectedFile?.type === 'application/pdf';
  }

  getFileIcon(): string {
    if (this.isImageFile()) return 'image-outline';
    if (this.isPDFFile()) return 'document-outline';
    return 'document-attach-outline';
  }
}