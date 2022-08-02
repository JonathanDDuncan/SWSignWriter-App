import { Injectable } from '@angular/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

@Injectable({
  providedIn: 'root'
})
export class SocialSharingService {
  constructor() {}

  share(fileName: string, base64Data: string) {
    return Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Cache
    })
      .then(() => {
        return Filesystem.getUri({
          directory: Directory.Cache,
          path: fileName
        });
      })
      .then((uriResult) => {
        return Share.share({
          title: fileName,          
          url: uriResult.uri,
        });
      });
  }
}
