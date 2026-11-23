// Julia's playbook, grouped into three sections. Wording follows her playbook
// document (edit.pdf), lightly edited for the web. Source limits: PLAYBOOK_SOURCES.md.

export interface PlaybookSection {
  slug: string;
  number: string;
  title: string;
  summary: string;
  items: string[];
}

export const playbookSections: PlaybookSection[] = [
  {
    slug: 'demanding-transparency',
    number: '01',
    title: 'Demanding transparency',
    summary: 'In order to demand transparency from our public officials, we must hold transparency as a radical value for ourselves.',
    items: [
      'In order to demand transparency from our public officials, we must hold transparency as a radical value for ourselves. This means involving the community proactively on issues, and forming and publishing clear processes on how the committee made key decisions on endorsements or policies.',
      'I’m grateful for this opportunity to stand on the shoulders of the leaders who have been doing this work for a long time. When we ran two years ago, Chair Scott and I did so on the shared values of honesty, transparency, and accountability. I’m grateful for the foundational infrastructure work we were able to do together to reactivate and reorganize the committee, including rewriting our local bylaws and restarting subcommittees. However, our visions for this party are vastly different. The days of people sitting in positions to enrich themselves or their friends are over.',
      'We should be sharing our meetings by live-streaming them on a dedicated content-sharing platform for all members. We should have a dedicated and reliable internet connection for the committee to run Zoom meetings consistently, with the link shared openly. We should keep archives and records publicly available on our website where appropriate, so the community is involved and aware of how we came to our conclusions and how our post seat holders voted.',
    ],
  },
  {
    slug: 'infrastructure',
    number: '02',
    title: 'Building on our recent successes and adding infrastructure',
    summary: 'Sustain the network we built through GOTV, and channel that energy into long-term engagement.',
    items: [
      'Sustain the network we built through GOTV, and channel that energy into long-term engagement by continuing the Knock Your Block program where the Coordinated Campaign is absent.',
      'Expand voting access. We’ve gotten four early voting locations, but we should have five. We should add a second Sunday of early voting, and continue diversifying the Board of Elections (BOE) to represent our community.',
      'Hold a post seat holder retreat in the first quarter of 2027 to set policy priorities and build a two-year operating strategic plan drawn from the National Democratic Training Committee.',
      'Create a fundraising infrastructure that can not only sustain the committee, but also support mutual aid events with community organizations and offices.',
      'Clean out our storage unit and find a long-term office space that a fundraising infrastructure will financially sustain. Then update our Google listing to reflect it, with a phone number staffed by the executive board to hear from constituents.',
      'Clarify our internal processes so that we can operate within the bylaws and focus more of our effort on the issues of substance instead of internal disagreements.',
      'Expand our subcommittee infrastructure to create and disseminate accurate, relevant information, so we can more effectively exercise our political influence when meeting with elected officials.',
    ],
  },
  {
    slug: 'policy-agenda',
    number: '03',
    title: 'Walking the walk of a bold progressive policy agenda',
    summary: 'No data centers in our community. No AI use in our committee.',
    items: [
      'No data centers in our community. No AI use in our committee.',
      'Secure a place for Middle Georgia in the Democratic Party of Georgia (DPG), and ensure that our voters are not taken for granted: their voices are heard, and policies, programs, and investments meet the needs of Middle Georgians.',
      'Being aggressively inclusive. Reports and websites of the Board of Elections (BOE), the Macon Water Authority (MWA), and this committee all need to be ADA (WCAG) compliant. We should bring food, childcare, and music to every meeting to bring working families in, and address the barriers to every person participating in the committee.',
      'Taxes should be progressive, not regressive. We should campaign against the Other Local Option Sales Tax (OLOST), because property owners can afford this tax more than everyday consumers.',
      'Engaging in all partisan and non-partisan races. We should lobby the DPG to change bylaws to make this easier, and develop a process within our committee to ensure voters always have a progressive option and are educated on who that is in nonpartisan races.',
      'Hearing and prioritizing our community’s changing values. We should hold 2-on-1 meetings to build lasting institutional relationships that will outlast a single person.',
    ],
  },
];
