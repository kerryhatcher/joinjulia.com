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
    title: 'Demanding Transparency',
    summary: 'In order to demand transparency from our public officials, we must hold transparency as a radical value for ourselves.',
    items: [
      'In order to demand transparency from our public officials, we must hold transparency as a radical value for ourselves. This means involving the community proactively on issues, and forming and publishing clear processes on how the committee made key decisions on endorsements or policies.',
      'I’m grateful for this opportunity to stand on the shoulders of the leaders who have been doing this work for a long time. When we ran two years ago, Chair Scott and I did so on the shared values of honesty, transparency, and accountability. I’m grateful for the foundational infrastructure work we were able to do together to reactivate and reorganize the committee, including rewriting our local bylaws and restarting subcommittees. However, our visions for this party are vastly different. The days of people sitting in positions to enrich themselves or their friends are over.',
      'Our committee will hold open, accessible hybrid meetings with a reliable internet connection so members can join the discussion in person or online. We’ll preserve meeting recordings and share them promptly with all members. Where appropriate, we’ll keep all meeting minutes and records available on our website so the community can stay involved, understand how we reached our decisions, and see how our post seat holders voted.',
    ],
  },
  {
    slug: 'infrastructure',
    number: '02',
    title: 'Building on Our Recent Successes and Adding Infrastructure',
    summary: 'Keep our voter outreach going, expand access to the ballot, and strengthen how the committee plans, raises funds, and serves the community.',
    items: [
      'Sustain the network we built through GOTV, and channel that energy into long-term engagement by continuing the Knock Your Block program where the Coordinated Campaign is absent.',
      'Expand voting access. We’ve secured four early voting locations. We’ll push for a fifth location and a second Sunday of early voting. We’ll keep working to diversify the Board of Elections (BOE) so it reflects our community.',
      'Hold a post seat holder retreat in the first quarter of 2027 to set policy priorities and build a two-year operating strategic plan drawn from the National Democratic Training Committee.',
      'Create a fundraising infrastructure that can not only sustain the committee, but also support mutual aid events with community organizations.',
      'Clean out our storage unit and find a long-term office space that a fundraising infrastructure will financially sustain. Then update our Google listing to reflect it, with a phone number staffed by the executive board to hear from constituents.',
      'Clarify our internal processes so that we can operate within the bylaws and focus more of our effort on the issues of substance instead of internal disagreements.',
      'Improve our subcommittee infrastructure to create and disseminate accurate, relevant information, so we can more effectively exercise our political influence when meeting with elected officials. Our policy and legislative subcommittee will monitor government agencies and quasi-governmental organizations. We’ll teach members how to advocate and give them opportunities to practice at multiple advocacy days, both locally and at the Georgia State Capitol.',
    ],
  },
  {
    slug: 'policy-agenda',
    number: '03',
    title: 'Walking the Walk of a Bold Progressive Policy Agenda',
    summary: 'Stand behind our neighbors’ priorities, build political influence heading into 2028, and hold candidates and elected officials accountable to our community.',
    items: [
      'We should limit the committee’s use of AI and invest in local talent.',
      'Make Middle Georgia a priority for the Democratic Party of Georgia (DPG), and ensure that our voters are not taken for granted: their voices are heard, and policies, programs, and investments meet the needs of Middle Georgians.',
      'Being aggressively inclusive. Reports and websites of the Board of Elections (BOE), the Macon Water Authority (MWA), all other public entities, and this committee all need to be ADA (WCAG) compliant. We’ll provide food, childcare, and music at every meeting to welcome working families, and we’ll challenge ourselves to address the barriers that keep anyone from participating in the committee.',
      'Taxes should be progressive, not regressive. We’ll campaign against the Other Local Option Sales Tax (OLOST), because property owners and corporations can afford this tax more than everyday consumers. We’ll advocate for removing the tax on food and oppose corporate tax breaks.',
      'Engaging in all partisan and non-partisan races. We’ll lobby the Democratic Party of Georgia to change its bylaws so our committee can take part in these races more easily. In nonpartisan races, we’ll develop a process to ensure voters always have a progressive option and know which candidate that is.',
      'Hearing and prioritizing our community’s changing values. We’ll hold 2-on-1 meetings to build relationships between organizations that last beyond any one person’s involvement.',
    ],
  },
];
