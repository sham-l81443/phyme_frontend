
export const ADMIN_ROUTES = {
    dashboard: '/admin/dashboard',
    config: '/admin/config',
    createSyllabus: '/admin/syllabus/create-syllabus',
    createClass: '/admin/class/create-class',
    createChapter:(subject:string)=>`/admin/subjects/${subject}/create-chapter`,

    userDetails:(id:string)=>`/admin/users/${id}`,

    createSubject:`/admin/subjects/create-subject`,
    subject:(subject:string)=>`/admin/subjects/${subject}`,
    chapter:(subject:string,chapter:string)=>`/admin/subjects/${subject}/${chapter}`,

    createTerm: '/admin/term/create-term',
    createNote: '/admin/config/note/create',
    settings: '/admin/config/setting',
    videos:'/admin/videos',
    createVideo: '/admin/videos/create',
    syllabus:'/admin/syllabus'
    }