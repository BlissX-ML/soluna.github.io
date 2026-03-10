import asyncHandler from 'express-async-handler';
import { getOssMdFiles } from '../../utils/oss/oss.md.js';

// @desc     GET repository files
// @route1   GET /api/data/md/computer-related
// @oss1     /articles/computer-catalogue-repository/
// @route2   GET /api/data/md/eightpart
// @oss2     /articles/eightpart-essay-catalogue-repository/
// @route3   GET /api/data/md/chemistry-related
// @oss3     /articles/chemistry-catalogue-repository/
// @route4   GET /api/data/md/language-related
// @oss4     /articles/language-catalogue-repository/
// @access   Public
export const mdFilesController = asyncHandler(async (req, res) => {
    const { routeId, secondRouteId } = req.params;

    const getUrl = () => {
        let first = null;

        if (routeId === 'computer-related') {
            first = 'computer-catalogue-repository';
        } else if (routeId === 'eightpart') {
            first = 'eightpart-essay-catalogue-repository';
        } else if (routeId === 'chemistry-related') {
            first = 'chemistry-catalogue-repository';
        } else if (routeId === 'language-related') {
            first = 'language-catalogue-repository';
        }

        const mix = `articles/${first}/`;
        return !secondRouteId ? mix : `${mix}${secondRouteId}/`;
    };

    const url = getUrl();
    const info = await getOssMdFiles(url);

    try {
        if (!info) {
            throw new Error('Cannot get anything about Computer.');
        }
        res.status(200).json(info);
    } catch (error) {
        res.status(401);
        throw new Error('Cannot get the whole lists with controller logics');
    }
});
