var an=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
}})
an.to("#tea",{
    top:"115%",
    left:"10%",
},'tea')
an.to("#tulsi",{
    top:"160%",
    left:"10%",
    rotate:("-50deg"),

},'tea')
an.to("#cardm",{
    top:"115%",
    left:"28%",
    width:"220px",
    rotate:('180deg'),
},'tea')
an.to("#ginger",{
    top:"165%",
    left:"85%",
    width:"200px",
    rotate:("20deg"),
},'tea')
