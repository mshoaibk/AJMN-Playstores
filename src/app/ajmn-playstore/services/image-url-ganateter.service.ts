import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageUrlGanateterService {

  constructor() { }
  
  constructDataURI(data: string): string {
    // Detect the image format from the base64 data
    const format = this.detectImageFormat(data);
  
    // Construct the data URI based on the detected format
    return `data:image/${format};base64,${data}`;
  }
  
  detectImageFormat(data: string): string {
    // Convert the base64 data to a binary string
    const binaryString = atob(data);

    // Read the first few bytes to determine the file signature
    const signature = binaryString.substr(0, 4);

    // Image signatures for common formats
    const pngSignature = "\x89PNG";
    const jpegSignature = "\xFF\xD8\xFF";
    const gifSignature = "GIF";
    const svgSignature = "<svg";

    // Check if the signature matches any known format
    if (signature === pngSignature) {
        return 'png';
    } else if (signature === jpegSignature) {
        return 'jpeg';
    } else if (signature === gifSignature) {
        return 'gif';
    } else if (binaryString.includes(svgSignature)) {
        return 'svg+xml';
    } else {
        // Default to PNG if the format cannot be determined
        return 'png';
    }
}
}
