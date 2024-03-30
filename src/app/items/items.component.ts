import { Component ,OnInit} from '@angular/core';

interface shoeItems{
  name: string;
  price: string;
  img: string;
  genderCategory: string;
  quality:string;
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {

  ngOnInit(): void {
    
  }
  public nikeItems:shoeItems[]=[
    {
      name:"Nike Air Force 1 ' 7",
      price:"7 495.00",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoes-WrLlWX.png",
      genderCategory: "Men's Shoes",
      quality:"Best Product"
    },
    {
      name:"Nike Air Force 1 ' 7",
      price:"8 195.00",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a42a5d53-2f99-4e78-a081-9d07a2d0774a/air-force-1-07-shoe-HWWX9W.png",
      genderCategory: "Men's Shoes",
      quality:"Best Product"
    },
    {
      name:"Nike Air Force 1 ' 7",
      price:"9 695.00",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/192fd022-6950-4373-96e5-289092314a7d/air-force-1-07-shoes-rKDDnV.png",
      genderCategory: "Women's Shoes",
      quality:"Best Product"
    },
    {
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1bb96f3b-ea2b-422c-ab0d-49f06c3c54ef/air-force-1-gtx-shoes-l3ck9t.png",
      name:"Nike Air Force 1 GTX",
      price:"14 995.00",
      genderCategory: "Shoes",
      quality:"Best Product"
    },
    {
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/549c58b4-8d4d-4121-86c5-dc16aaa048ea/air-force-1-low-retro-shoes-wT2HcW.png",
      name:"Nike Air Force 1 Law Retro",
      price:"9 695.00",
      genderCategory: "Women's Shoes",
      quality:"Best Product"
    },
    {
      img:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_467,c_limit/d9e03d96-02b8-4ae3-abf8-e9686604e615/acg-sun-farer-jacket-JtVCNb.png",
      name:"Nike ACG Sun Farer",
      price:"10 495.00",
      genderCategory: "Men's Jacket",
      quality:"Best Product"
    },
    {
      img:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_467,c_limit/016bb702-ea9e-4a99-880c-9abdf225049f/liverpool-fc-sport-essentials-windrunner-hooded-football-jacket-PMpCQG.png",
      name:"Liverpool F.C Sport Essential Windrunner",
      price:"5 995.00",
      genderCategory: "Men's Nike Hooded Football Jacket",
      quality:"Best Product"
    },
    {
      img:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_467,c_limit/499ade57-9258-4615-bd0d-9d3694f53b07/liverpool-fc-club-fleece-crew-neck-sweatshirt-HJGtFD.png",
      name:"Liverpool F.C Club Fleece",
      price:"3 695.00",
      genderCategory: "Men's Crew-Neck Sweatshirt",
      quality:"Best Product"
    },
    {
      img:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_467,c_limit/0a1db69e-153c-4805-b309-97199b44cdb8/dri-fit-13cm-brief-lined-trail-shorts-GxrsJl.png",
      name:"Nike Dri-FIT",
      price:"3 695.00",
      genderCategory: "Men's Brief-Lined Trail Shorts",
      quality:"Best Product"
    },
    {
      img:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_467,c_limit/384953c7-24fe-4776-b12c-6fd1f5eb45fb/paris-saint-germain-strike-dri-fit-knit-football-shorts-67NDjQ.png",
      name:"Paris Saint-Germain Strike",
      price:"2 795.00",
      genderCategory: "Men's Nike Dri-FIT Knit Football Shorts",
      quality:"Best Product"
    },
  ]
    

}
