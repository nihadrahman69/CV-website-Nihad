import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Font,
} from '@react-pdf/renderer';
import { masterProfile } from '../../data/masterProfile';

// Register standard fonts
Font.register({
  family: 'Open Sans',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf', fontWeight: 700 },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: '15mm',
    fontFamily: 'Open Sans',
    fontSize: 10,
    color: '#1f2937', // gray-900
    backgroundColor: '#ffffff',
  },
  header: {
    textAlign: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 4,
  },
  headline: {
    fontSize: 11,
    color: '#4b5563', // gray-600
    marginBottom: 6,
  },
  contactText: {
    fontSize: 9,
    color: '#374151', // gray-700
    marginBottom: 2,
  },
  link: {
    color: '#374151',
    textDecoration: 'none',
  },
  section: {
    marginTop: 12,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    textTransform: 'uppercase',
    borderBottomWidth: 1.5,
    borderBottomColor: '#1f2937',
    paddingBottom: 2,
    marginBottom: 6,
  },
  entry: {
    marginBottom: 8,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 2,
  },
  entryTitle: {
    fontSize: 10,
    fontWeight: 700,
  },
  entryMeta: {
    fontSize: 9,
    color: '#4b5563',
  },
  entrySubTitle: {
    fontSize: 9.5,
    color: '#374151',
    marginBottom: 2,
  },
  text: {
    fontSize: 9.5,
    lineHeight: 1.5,
    color: '#1f2937',
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bullet: {
    width: 10,
    fontSize: 9.5,
  },
  bulletText: {
    flex: 1,
    fontSize: 9.5,
    lineHeight: 1.5,
    color: '#1f2937',
  },
  flexRowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bold: {
    fontWeight: 700,
  }
});

function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/i, '').replace(/\/$/, '');
}

const MAX_PROJECTS = 4;

export default function ReactPDFDocument() {
  const {
    personal,
    contact,
    summary,
    education,
    experience,
    projects,
    technicalSkills,
    professionalSkills,
    languages,
    professionalInterests,
    aiTools,
    additionalSkills,
  } = masterProfile;

  const visibleProjects = projects.slice(0, MAX_PROJECTS);
  const contactParts = [contact.email, ...contact.phoneNumbers, personal.location];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personal.name}</Text>
          <Text style={styles.headline}>{personal.headline}</Text>
          <Text style={styles.contactText}>{contactParts.join('  |  ')}</Text>
          <Text style={styles.contactText}>
            LinkedIn: <Link style={styles.link} src={contact.linkedin}>{displayUrl(contact.linkedin)}</Link>  |  
            GitHub: <Link style={styles.link} src={contact.github}>{displayUrl(contact.github)}</Link>
          </Text>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.text}>{summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((entry) => (
            <View key={entry.id} style={styles.entry} wrap={false}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>
                  {entry.degree}{entry.major ? `, ${entry.major}` : ''}
                </Text>
                <Text style={styles.entryMeta}>{entry.year}</Text>
              </View>
              <Text style={styles.entrySubTitle}>
                {entry.institution}{entry.gpa ? ` — ${entry.gpa}` : ''}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.map((entry) => (
            <View key={entry.id} style={styles.entry} wrap={false}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>
                  {entry.position} — {entry.organization}
                </Text>
                <Text style={styles.entryMeta}>{entry.duration}</Text>
              </View>
              {entry.responsibilities.map((item, idx) => (
                <View key={idx} style={styles.bulletRow}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{item}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {visibleProjects.map((project) => (
            <View key={project.id} style={styles.entry} wrap={false}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>{project.name}</Text>
                <Text style={styles.entryMeta}>{project.technologies.join(', ')}</Text>
              </View>
              <Text style={styles.text}>{project.description}</Text>
              <Text style={{ ...styles.contactText, marginTop: 2 }}>
                <Link style={styles.link} src={project.repoUrl}>{displayUrl(project.repoUrl)}</Link>
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {technicalSkills.map((cat) => (
            <Text key={cat.category} style={styles.text}>
              <Text style={styles.bold}>{cat.category}: </Text>
              {cat.skills.join(', ')}
            </Text>
          ))}
          {professionalSkills.length > 0 && (
            <Text style={styles.text}>
              <Text style={styles.bold}>Professional: </Text>
              {professionalSkills.map((s) => s.name).join(', ')}
            </Text>
          )}
          {aiTools.length > 0 && (
            <Text style={styles.text}>
              <Text style={styles.bold}>AI Tools: </Text>
              {aiTools.join(', ')}
            </Text>
          )}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Languages</Text>
          <Text style={styles.text}>
            {languages.map((lang) => {
              const parts = [`Spoken: ${lang.spoken}`];
              if (lang.written) parts.push(`Written: ${lang.written}`);
              return `${lang.name} (${parts.join(', ')})`;
            }).join('  ·  ')}
          </Text>
        </View>

        {(professionalInterests.length > 0 || additionalSkills.length > 0) && (
          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>Additional Information</Text>
            {professionalInterests.length > 0 && (
              <Text style={styles.text}>
                <Text style={styles.bold}>Interests: </Text>
                {professionalInterests.join(', ')}
              </Text>
            )}
            {additionalSkills.length > 0 && (
              <Text style={styles.text}>
                <Text style={styles.bold}>Additional: </Text>
                {additionalSkills.join(', ')}
              </Text>
            )}
          </View>
        )}
      </Page>
    </Document>
  );
}
