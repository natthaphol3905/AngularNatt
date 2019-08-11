import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

  clickSave(productName, category, price) {
    this.productService.addProduct(productName, category, price);
  }

}
