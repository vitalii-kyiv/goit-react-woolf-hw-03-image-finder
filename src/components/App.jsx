import { Component } from 'react';
import { getImagesApi } from '../api/images';
import ImageGallery from './ImageGallery/ImageGallery';
class App extends Component {
  state = {
    images: [],
    
  };
  componentDidMount() {
    this.getImages()
   
  }

  getImages = async() => {
    const data = await getImagesApi()
    console.log(data)
    this.setState({ images: data.hits }, () => {
      console.log('Оновлений стан:', this.state.images);
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ImageGallery images={this.state.images}/>
        
      </div>
    );
  }
}
export default App;
