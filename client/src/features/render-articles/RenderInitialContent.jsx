import { useMemo } from "react";
import { MEMOS } from "../../_data/memo-page/memo";
import { useAppSelector } from "../../store/reducer/hooks";
import classes from "./RenderInitialContent.module.scss";

// 这里的 files 是要能够返回文件数量的数据
export default function RenderInitialContent({ files }) {
    const { asidebarActive } = useAppSelector((state) => state.dropdownSidebar);

    const fileNumber = useMemo(() => files.length, [files]);

    const date = new Intl.DateTimeFormat("zh-CH", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(new Date());

    return (
        <main
            className={`${classes.container} ${asidebarActive ? "" : classes.close}`}
        >
            <div className={classes.content}>
                <h2>八股文整理</h2>
                <p>
                    截至 {date} 共整理归纳 {fileNumber} 篇八股文内容
                </p>
                <p>持续更新中 . . .</p>
                <p>点击左侧对应目录，以获取相应的八股文内容</p>
            </div>
        </main>
    );
}
