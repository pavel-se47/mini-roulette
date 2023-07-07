import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import loadingStyles from 'App.module.css';

const HomePage = lazy(() =>
  import('components/HomePage/HomePage' /* webpackChunkName: "home-page" */)
);

const GamePage = lazy(() =>
  import('components/GamePage/GamePage' /* webpackChunkName: "game-page" */)
);

export default function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className={loadingStyles.loading}>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="skyblue"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        }
      >
        <Routes>
          <Route>
            <Route index path="/" element={<HomePage />} />
          </Route>

          <Route>
            <Route path="/game" element={<GamePage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}
