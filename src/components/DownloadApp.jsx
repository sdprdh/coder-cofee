import appStore from '../assets/website/app_store.png';
import playStore from '../assets/website/play_store.png';
import coverCofee from '../assets/coffee-cover.jpg';

export const DownloadApp = () => {
    const styles = {
        width: '95%',
        margin:'0 auto',
        backgroundImage: `url(${coverCofee})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <section
            className="h-[220px] sm:h-[400px] flex justify-end items-center rounded-xl"
            style={styles}
        >
            <div className="space-y-4 md:space-y-6 max-w-xl">
                <h1 className="text-2xl text-center sm:text-4xl font-semibold">
                    Download the app
                </h1>
                <p className="text-center sm:px-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis.
                </p>
                <div className="flex justify-center items-center gap-4">
                    <a
                        href="#"
                        className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    >
                        <img
                            src={appStore}
                            alt="App Store"
                        />
                    </a>
                    <a
                        href="#"
                        className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    >
                        <img
                            src={playStore}
                            alt="Play Store"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};
