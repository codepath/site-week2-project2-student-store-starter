import React, { useEffect, useState } from 'react';
import './Home.css';
import {
  spectacularTitle,
  utilityButtons,
  aboutP,
  contactInfo,
} from '../../assets/style.js';
import merchIcon from '../../assets/images/medium.jpeg';
import {
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  Flex,
  filter,
} from '@chakra-ui/react';
import { Search2Icon, QuestionIcon } from '@chakra-ui/icons';
import { FiShoppingCart } from 'react-icons/fi';
import Categories from './HomeComponents/Categories';
import axios from 'axios';
import Card from './HomeComponents/Card';
import CodePathLogo from '../../assets/images/codepathLogo.png';
import GirlModel from '../../assets/images/ed-tech-survey-march-2023-schwartz.jpg';
import Footer from './HomeComponents/Footer';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const options = [
    {
      title: 'All Categories',
      index: 1,
      category: null,
    },
    {
      title: 'Clothing',
      index: 2,
      category: 'clothing',
    },
    {
      title: 'Food',
      index: 3,
      category: 'food',
    },
    {
      title: 'Accessories',
      index: 4,
      category: 'accessories',
    },
    {
      title: 'Tech',
      index: 5,
      category: 'tech',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(options[0]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showingProducts, setShowingProducts] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://codepath-store-api.herokuapp.com/store'
      );
      setProducts(response.data.products);
      setFilteredProducts(response.data.products);
      setShowingProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleOptionClick = (option) => {
    setSelectedCategory(option);
    if (option.category === null) {
      setFilteredProducts(products);
      setShowingProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === option.category
      );
      setFilteredProducts(filtered);
      setShowingProducts(filtered);
    }
  };

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearch(searchText);

    if (searchText === '') {
      // If the search input is empty, show all products
      setShowingProducts(filteredProducts);
    } else {
      // Filter the products based on the search input
      const filtered = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setShowingProducts(filtered);
    }
  };

  const goToProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className='home gap-4'>
      {/* Spectacular */}
      <div
        id='spectacular'
        className='w-2/3 bg-green-200 h-[350px] flex justify-center items-center gap-16 p-3'
      >
        <div className='w-1/2'>
          <h1 className={spectacularTitle}>Welcome!</h1>
          <h1 className={spectacularTitle}>Find Your Merch!</h1>
          <h5 className='text-xl font-bold'>
            We have all kinds of goodies. Click on any of the items to start
            filling up your shopping cart. Checkout whenever you're ready.
          </h5>
        </div>
        <img src={merchIcon} alt='Merch icon' className='h-[200px]' />
      </div>
      {/* Utility */}
      <div className='flex justify-center content-center w-2/3 gap-3'>
        {/* Searchbar */}
        <div className='flex justify-center items-center gap-2  w-1/2'>
          <Search2Icon />
          <Input
            type='search'
            placeholder='Search'
            className='p-2 w-[80%] border border-green-500 rounded-lg'
            onChange={handleSearchChange}
          />
        </div>
        {/* Help */}
        <button className={utilityButtons}>
          <QuestionIcon />
          <h1 className='text-xl font-semibold'>Help</h1>
        </button>
        {/* Cart */}
        <button className={utilityButtons}>
          <FiShoppingCart />
          <h1 className='text-xl font-semibold'>Cart</h1>
        </button>
        {/* Categories menu */}
      </div>
      <Categories
        options={options}
        selectedOption={selectedCategory}
        handleOptionClick={handleOptionClick}
      />
      <div
        id='products-grid'
        className='w-2/3 grid grid-cols-4 gap-4 justify-self-center m-4'
      >
        {showingProducts.length > 0 ? (
          showingProducts.map((product) => (
            <Card key={product.id} props={product} goToProduct={goToProduct} />
          ))
        ) : (
          <p className='text-2xl font-semibold'>
            No hay el producto que buscas ☹️
          </p>
        )}
      </div>
      {/* About */}
      <p className='text-4xl font-bold mt-4'>About</p>
      <div
        id='about'
        className='w-2/3 h-[400px] rounded-md flex justify-center items-center overflow-hidden'
      >
        <div className='text-md font-light bg-slate-100 h-full w-2/3 px-8 py-20'>
          <p className={aboutP}>
            The codepath student store offers great products at great prices
            from a great team and for a great cause.
          </p>
          <br />
          <p className={aboutP}>
            We've searched far and wide for items that perk the interests of
            even the most eccentric students and decided to offer them all here
            in one place.
          </p>
          <br />
          <p className={aboutP}>
            All proceeds go towards bringing high quality CS education to
            college students around the country.
          </p>
        </div>
        <div className='flex justify-center items-center h-full w-1/3 bg-green-700'>
          <img src={CodePathLogo} alt='' className='h-5/6' />
        </div>
      </div>
      {/* Contact us */}
      <p className='text-4xl font-bold mt-4'>Contact Us</p>
      <div
        id='about'
        className='w-2/3 h-[400px] rounded-md flex justify-center items-center overflow-hidden bg-gray-700 gap-12'
      >
        <div className='text-md font-semibold h-full w-1/3 flex justify-evenly items-start flex-col'>
          <div className={contactInfo}>
            <p>Email:</p>
            <p>code@path.org</p>
          </div>
          <div className={contactInfo}>
            <p>Phone:</p>
            <p>1-800-CODEPATH</p>
          </div>
          <div className={contactInfo}>
            <p>Address:</p>
            <div>
              <p>
                123, Fake Street
                <br />
                San Francisco, CA
              </p>
            </div>
          </div>
        </div>
        <img src={GirlModel} alt='' className='h-full mt-5' />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}