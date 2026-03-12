import classes from './CertificatesLayout.module.scss';
import BarChart from '../../../../components/charts/bar/BarChart';

import CertificatesList from '../../../../features/dashboard/router/certificate/CertificatesList';

import { OBTAINED_CERTIFICATE } from '../../../../_data/dashboard/certificates/obtained-certificate';
import CarouselComp from '../../../../components/carousel/CarouselComp';
import { useWebpChartApi } from '../../../../api/useWebpApi';
import Loading from '../../../../components/feedback/Loading';

export default function CertificatesLayout() {
    const { data: chartData, isLoad } = useWebpChartApi();

    return (
        <main className={classes.container}>
            {isLoad ? (
                <Loading />
            ) : (
                <>
                    <div className={classes.left}>
                        <CertificatesList
                            datas={OBTAINED_CERTIFICATE}
                            style={classes.lists}
                        />

                        <BarChart
                            className={classes.chart}
                            resources={chartData}
                        />
                    </div>

                    <CarouselComp className={classes.slide} />
                </>
            )}
        </main>
    );
}
