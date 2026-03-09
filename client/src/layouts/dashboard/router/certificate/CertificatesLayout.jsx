import classes from './CertificatesLayout.module.scss';
import BarChart from '../../../../components/charts/bar/BarChart';

import CertificatesList from '../../../../features/dashboard/router/certificate/CertificatesList';

import { CERTIFICATE_CHART } from '../../../../_data/dashboard/certificates/certificate-chart';
import { OBTAINED_CERTIFICATE } from '../../../../_data/dashboard/certificates/obtained-certificate';
import CarouselComp from '../../../../components/carousel/CarouselComp';

export default function CertificatesLayout() {
    return (
        <main className={classes.container}>
            <CertificatesList
                datas={OBTAINED_CERTIFICATE}
                styleLayout={classes.lists}
            />

            <CarouselComp className={classes.slide} />

            <BarChart className={classes.chart} resources={CERTIFICATE_CHART} />
        </main>
    );
}
