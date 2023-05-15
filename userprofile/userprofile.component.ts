import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  recipe: any;
  user:any;
  showForm: boolean = false;
  rec: any = {};
  recupd: any;
  constructor(private recser: RecipeService,private usrser:UserserviceService, private router: Router) {}
  ngOnInit(): void {
    this.getRecipeList();
    this.getUserList();
  }
  getRecipeList() {
    return this.recser.getAllRecipesFromDB().subscribe((data: any) => {
      this.recipe = data;
    });
  }
  delbyid(recipeid: any) {
    return this.recser.deleteRecipe(recipeid).subscribe((data: any) => {
      console.log(data);
      this.ngOnInit();
    });
  }

  editRecipe(Recipe: any) {
    this.recupd = Recipe;
  }

  updateRecipe() {
    return this.recser.updateRecipe(this.recupd).subscribe((data: any) => {
      console.log(data);
      this.recupd = null;
      this.ngOnInit();
    });
  }
  getUserList() {
    return this.usrser.getUserList().subscribe((data: any) => {
      this.user = data;
    });
  }
}
