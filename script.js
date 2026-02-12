$(function() {
    $("#tabs").tabs(); 

    $("#run").click(function() {
        let htmlCode = $("#html").val();
        let cssCode = "<style>" + $("#css").val() + "</style>";
        let jsCode = $("#js").val();

        let iframe = document.getElementById("resultFrame");
        let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

        iframeDoc.open();
        iframeDoc.write(htmlCode + cssCode);
        iframeDoc.close();

        try {
            iframe.contentWindow.eval(jsCode);
        } catch (error) {
            alert("Error in JS code: " + error.message);
        }
    });
});
