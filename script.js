document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const doc = new window.jspdf.jsPDF();

    const situation = document.getElementById("situation").value;
    const thought = document.getElementById("thought").value;
    const emotion = document.getElementById("emotion").value;
    const evidence = document.getElementById("evidence").value;
    const challenge = document.getElementById("challenge").value;

    const distortionCheckboxes = document.querySelectorAll('input[name="distortion"]:checked');

const distortion = Array.from(distortionCheckboxes)
    .map(cb => cb.value)
    .join(", ");

    let y = 10;

    doc.setFontSize(14);
    doc.text("CBT Worksheet", 10, y);
    y += 10;

    doc.setFontSize(11);

    function addText(title, content) {
        doc.text(title, 10, y);
        y += 6;

        const lines = doc.splitTextToSize(content, 180);
        doc.text(lines, 10, y);
        y += lines.length * 6 + 4;7
        
        
    }

    addText("Situation:", situation);
    addText("Negative Thought:", thought);
    addText("Emotion:", emotion);
    addText("Evidence:", evidence);
    addText("Cognitive Distortion:", distortion);
    addText("Challenge Thought:", challenge);

    doc.save("CBT_Worksheet.pdf");
});
