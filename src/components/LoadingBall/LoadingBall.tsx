import ball from '../../assets/ball-white.svg';

const LoadingBall = ({ styles }: { styles: string }) => {
  return (
    <img src={ball} alt="Loading" className={`${styles} animate-bounce`} />
  );
};

export default LoadingBall;
