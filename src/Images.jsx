import { Carousel } from 'react-carousel-minimal';
import './ImageStyles.css'

export default function Images({img}) {
const imgArr = [...img];
console.log(imgArr)
 const data = [
    {
      image: imgArr[0],
    },
    {
      image: imgArr[1],
    },
    {
      image: imgArr[2],
    },
    {
      image: imgArr[3],
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px",
        }}>
          <Carousel
            data={data}
            time={2000}
            width="450px"
            height="570px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              // maxWidth: "450px",
              // maxHeight: "570px",
              margin: "0px auto",
              display:"flex",
              flexDirection: 'row-reverse',
              width: 'fit-content'
            }}
          />
        </div>
      </div>
    </div>
  );
}
