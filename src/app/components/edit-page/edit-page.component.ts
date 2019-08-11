import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../../services/product.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  productForm: FormGroup;
  product: any

  constructor(private productService: ProductService, private actRoute: ActivatedRoute, private fb: FormBuilder) {
    this.createForm()
  }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.productService
      .loadDetailProduct(params['id'])
      .subscribe(res => {
        this.product = res
      })
    })
  }

  createForm() {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

  clickUpdate(productName, category, price) {
    this.actRoute.params.subscribe(params => {
      this.productService.updateProduct(params['id'],productName,category, price)
    })
  }

}
