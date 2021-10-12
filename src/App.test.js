/**
 * @jest-environment jsdom
 */

 import '@testing-library/jest-dom';
import { render, screen, fireEvent, userEvent } from '@testing-library/react';
import React from 'react';
import App from './App';
import AlbumCard from './components/AlbumCard';
import ArtistCard from './components/ArtistCard';
import LikesComponent from './components/LikesComponent';



test('renders header with default Favorite Artist', () => {
    render(<App />);
    const mainHeader = screen.getByText('Favorite Artist');
    expect(mainHeader).toBeInTheDocument()
  
  });
  test('renders img of Favorite Artist', () => {
    render(<ArtistCard />);
    const mainImg = screen.getByRole('img');
    expect(mainImg).toBeInTheDocument()
  
  });
  test('renders img of album cover', () => {
    render(<AlbumCard />);
    const coverImgArr = screen.getAllByRole('img');
    expect(coverImgArr[0]).toBeInTheDocument()
    expect(coverImgArr).toHaveLength(3)
  
  });

  test('renders like icon ', () => {
    render(<AlbumCard />);
    const coverImgArr = screen.getAllByLabelText('icon');
    expect(coverImgArr[0]).toBeInTheDocument()
   
  });
  test('renders like and it works', () => {
    render(<AlbumCard />);
    const likeBtnArr = screen.getAllByLabelText('icon');
    fireEvent.click(likeBtnArr[0])
    const likeBtnState = likeBtnArr[0]
    expect(likeBtnState).toHaveClass("fa fa-heart")
  
  });
  