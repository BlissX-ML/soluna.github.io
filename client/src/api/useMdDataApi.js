import { useGetComputerFilesQuery } from '../store/reducer/data.mdApiSlice.js';

export function useMdDataApi(routeId, hash) {
    const { data, isLoading } = useGetComputerFilesQuery({
        routeId,
        secondRouteId: hash
    });

    return { data, isLoad: isLoading };
}
