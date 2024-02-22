import { Component } from 'react';
import { getImagesApi } from '../api/images';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
class App extends Component {
  state = {
    images: [],
    page: 1,
    q: "",
    loading: false
    
  };
  componentDidMount() {
    this.getImages()
   
  }

  getImages = async () => {
    const {q, page} = this.state
    try {
      const data = await getImagesApi(q, page)
    console.log(data)
   this.setState({ images: [...this.state.images, ...data.hits] }, () => {
      console.log('Оновлений стан:', this.state.images);
    });
    } catch (error) {
      console.log(error)
    }
  };

  handleLoadMore = () => {
  this.setState((prevState) => ({ page: prevState.page + 1 }), this.getImages);
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
        <Searchbar/>
        <ImageGallery images={this.state.images} />
        <Button handleLoadMore={this.handleLoadMore } />
        
      </div>
    );
  }
}
export default App;
