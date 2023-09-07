import Header from '../components/Header'
import AboutPart from '../components/AboutPart';
import FeaturesPart from '../components/FeaturesPart';
import FeaturesList from '../components/FeaturesList';
import DownloadPart from '../components/DownloadPart';
import OrderPart from '../components/OrderPart';
import ContactPart from '../components/ContactPart';
import TestimonialsShortPart from '../components/TestimonialsShortPart';

export default function Home () {
    return(
    <>
        <Header />
        <AboutPart />
        <TestimonialsShortPart />
        <FeaturesPart />
        <FeaturesList />
        <DownloadPart />
        <OrderPart />
        <ContactPart />
    </>
    )
}