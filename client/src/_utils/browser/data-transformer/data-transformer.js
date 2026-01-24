const getRandom = () => {
    return (Math.random() * 2 - 1).toFixed(2);
};

// 将扁平数据转换为侧边栏数据
export function transformToSidebarData(data) {
  const sidebarData = new Map();
  
  data.forEach(d => {
    const category = d.category;  // 数据的 category 字段作为侧边栏一级标题
    
    if (!sidebarData.has(category)) {
      sidebarData.set(category, {
        key: category,
        title: category,
        level: 1,
        delayTime: getRandom(),
        detail: {
          level: 2,
          data: []
        }
      });
    }

    sidebarData.get(category)?.detail?.data.push({
      key: d.key,
      title: d.titleCh,
      src: d.path,
      fileName: d.fileName
    });
  });

  return Array.from(sidebarData.values());
}

// 将扁平数据转换为路由数据
export function transformToRouteData(data) {
  const routeData = new Map();
  
  data.forEach(d => {
    const category = d.category;
    
    if (!routeData.has(category)) {
      routeData.set(category, {
        key: category.toLowerCase(),
        data: []
      });
    }

    routeData.get(category)?.data.push(d);
  });

  return Array.from(routeData.values());
}
