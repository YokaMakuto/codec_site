type CommitteeMember = {
    name: string;
    position: string;
    exec?: boolean;
};

// List of committee members with name, role and whether they are part of the
// executive committee
// Edit this array to update committee members!

const STATIC_COMMITTEE_MEMBERS: CommitteeMember[] = [
    { name: 'KADRI Taysir Mohammed Lahbib', position: 'President', exec: true },
    { name: 'DJABER Allae', position: 'Vice President', exec: true },
    { name: 'OULEDDRISS abdelmonaim', position: 'Treasurer', exec: true },
    { name: 'LAMMAR mohamed aissam', position: 'Design Manager', exec: true },
    { name: 'BOUDISSA Farouk Redhouan', position: 'Social Media Manager', exec: false },
    { name: 'HADJ Soundous', position: 'Events Manager', exec: false },
    { name: 'ARIAN Djad', position: 'Development Manager', exec: false },
    { name: 'BOUKHENNOUFA Assil Abderrezak', position: 'External Relations Manager', exec: false },
    // Add more committee members here!
];

const EXEC_ROLE_PRIORITY = ['President', 'Vice President', 'Treasurer', 'Secretary'];

function sortCommitteeMembers(members: CommitteeMember[]) {
    return members.sort((a, b) => {
        // Exec vs Non-exec
        if (a.exec && !b.exec) return -1;
        if (!a.exec && b.exec) return 1;

        // Both are execs
        if (a.exec && b.exec) {
            const aIndex = EXEC_ROLE_PRIORITY.indexOf(a.position);
            const bIndex = EXEC_ROLE_PRIORITY.indexOf(b.position);

            if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
            if (aIndex !== -1) return -1;
            if (bIndex !== -1) return 1;

            // Remaining exec roles alphabetically
            return a.position.localeCompare(b.position);
        }

        // Both are non-execs
        const aIsManager = a.position.includes('Manager');
        const bIsManager = b.position.includes('Manager');

        if (aIsManager && !bIsManager) return -1;
        if (!aIsManager && bIsManager) return 1;

        // Non-manager non-execs → sort by role, then name
        const roleCompare = a.position.localeCompare(b.position);
        if (roleCompare !== 0) return roleCompare;

        return a.name.localeCompare(b.name);
    });
}

export async function fetchCommitteeMember(): Promise<CommitteeMember[]> {
    // Return static committee members - no database/API needed!
    return sortCommitteeMembers(STATIC_COMMITTEE_MEMBERS);
}
