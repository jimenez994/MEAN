export class User {
    _id: string = "";
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    password_confirm: string;
    myImg: string;
    title: string;
    aboutMeTitle: string;
    subTitle: string;
    summary: string;
    aboutMe: string;
    experience: string;
    headerImg: string;
    imgName:string;
    otherImg: string;
    status: string;
    other: string;
    leftG: string;
    rightG: string; 

    canEditHeader: boolean = false;
    canEditSummary: boolean = false;
    canEditStack: boolean = false;
    canEditAboutMe: boolean = false;
    canEditProject: boolean = false;
    canEditSkill: boolean = false;
    canEditAccomplishment: boolean = false;
    canEditTech: boolean = false;
    canEditLink: boolean = false;
    canEditRecommendation: boolean = false;    
    canEditOther: boolean = false;    
        
    _skill: any[];
    _work: any[];
    _recommendation: any[];
    _project: any[];
    _message: any[];
    _image: any[];
    _accomplishment: any[];
    _link: any[];
    _tech: any[];
    createAt: any;
    updatedAt: any;
}
