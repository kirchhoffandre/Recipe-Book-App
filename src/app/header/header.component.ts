import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  appName = this.dataStorageService.getAppName();



  constructor(private dataStorageService: DataStorageService) {
  
  }
  onSaveData(){
    this.dataStorageService.storeRecipe().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData(){
    this.dataStorageService.getRecipes();
  }

}
