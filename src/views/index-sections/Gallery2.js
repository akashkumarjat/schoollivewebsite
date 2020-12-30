import React from "react";
import ReactDOM from "react-dom";
import Gallery from "react-grid-gallery";

import '../../assets/scss/paper-kit/plugins/gallery2.scss';

const IMAGES = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" }
    ],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" }
    ],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" }
    ],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" }
    ],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 720,
    thumbnailHeight: 212
  }
];

function App() {
  return (
    <Gallery
      images={IMAGES}
      enableLightbox={true}
      // maxRows={3}
      backdropClosesModal
      // currentImage={3}
      // isOpen={ true}
    />
  );
}

export default Gallery;












// import React from "react";
// import '../../assets/scss/paper-kit/plugins/gallery2.scss';
// import { Row, Col, Carousel, } from 'antd';
// import {
//     Button
// } from "reactstrap";
// const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

// function Gallery() {
//     return (
//         <>
//             <Row className="gallery-section">
//                 <Col span={24}>

//                     <h1>new Our Gallery</h1>

//                 </Col>
//             </Row>


//             <div className="container ">
//                 <div className="row">
//                     <div className="col-lg-4 col-md-4 col-sm-12">
//                         <img className="a img-fluid" alt="..." src={require("assets/img/img1.jpg")} />

//                     </div>
//                     <div className="col-lg-4 col-md-4 col-sm-12">
//                         <img className="b img-fluid" alt="..." src={require("assets/img/img2.jpg")} />

//                     </div>
//                     <div className="col-lg-4 col-md-4 col-sm-12">
//                         <img className="c img-fluid" alt="..." src={require("assets/img/img3.jpg")} />

//                     </div>
//                 </div>
//             </div>

//             <div class="grid-container">
//                 <div class="grid-item item1"><img className="ask img-fluid" alt="..." src={require("assets/img/img1.jpg")} />
// </div>
//                 <div class="grid-item item2"><img className="ask img-fluid" alt="..." src={require("assets/img/img2.jpg")} />
// </div>
//                 <div class="grid-item item3"><img className="ask img-fluid" alt="..." src={require("assets/img/img1.jpg")} />
// </div>
//                 <div class="grid-item item4"><img className="ask img-fluid" alt="..." src={require("assets/img/img1.jpg")} />
// </div>
//                 <div class="grid-item item5"><img className="ask img-fluid" alt="..." src={require("assets/img/img1.jpg")} />
// </div>
//             </div>
//         </>
//     );
// }

// export default Gallery;
