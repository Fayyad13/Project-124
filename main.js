function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 500);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initiated");
}

function draw()
{
    background("#3f3f47");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
    }
}