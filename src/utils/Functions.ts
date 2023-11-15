export const downloadvideo = async (url:string, title:string) => {
    try {
      console.log(url);
      
        const response = await fetch(url);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = `${title}.mp4`;
        link.click();
        URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error("Error al descargar el video:", error);
      }
}