import os
import sys
import subprocess
import json
from fpdf import FPDF

class ResumePDF(FPDF):
    def __init__(self):
        super().__init__(orientation="P", unit="mm", format="letter")
        self.set_margins(12.7, 10.0, 12.7) # 0.5 in side margins, 10mm top/bottom
        self.set_auto_page_break(False)
        self.add_page()
        
    def add_header(self, personal_info):
        # Name
        self.set_font("Helvetica", "B", 17)
        self.set_text_color(15, 23, 42) # Slate 900
        self.cell(0, 7, personal_info.get("name", "Andrew Baxter"), ln=True, align="C")
        
        # Subtitle
        self.set_font("Helvetica", "B", 10)
        self.set_text_color(51, 65, 85) # Slate 700
        self.cell(0, 4.5, personal_info.get("title", "AI Specialist & Software Developer"), ln=True, align="C")
        
        # Contact info
        self.set_font("Helvetica", "", 8.2)
        self.set_text_color(71, 85, 105) # Slate 600
        
        # Parse urls to clean display format
        github_url = personal_info.get("github", "github.com/asbaxter").replace("https://", "").replace("www.", "")
        linkedin_url = personal_info.get("linkedin", "linkedin.com").replace("https://", "").replace("www.", "")
        
        contact_info = (
            f"{personal_info.get('location', 'Indianapolis, IN')}  |  {personal_info.get('phone', '')}  |  {personal_info.get('email', '')}  |  andrewbaxter.dev\n"
            f"{github_url}  |  {linkedin_url}"
        )
        self.multi_cell(0, 3.6, contact_info, align="C")
        self.ln(1.5)

    def add_section_header(self, title):
        self.set_font("Helvetica", "B", 9.5)
        self.set_text_color(30, 41, 59) # Slate 800
        self.cell(0, 4.5, title.upper(), ln=True)
        # Draw a thin horizontal line below section header
        x = self.get_x()
        y = self.get_y()
        self.set_draw_color(226, 232, 240) # Slate 200
        self.set_line_width(0.3)
        self.line(x, y, x + 190.5, y) # 190.5 mm width available
        self.ln(1.2)

    def add_job_header(self, company, role, dates):
        self.set_font("Helvetica", "B", 8.8)
        self.set_text_color(15, 23, 42) # Slate 900
        title_text = f"{company}  -  {role}"
        self.cell(140, 3.8, title_text, ln=False)
        self.set_font("Helvetica", "B", 8.2)
        self.set_text_color(71, 85, 105) # Slate 600
        self.cell(0, 3.8, dates, ln=True, align="R")
        self.ln(0.4)

    def add_bullet(self, text):
        self.set_font("Helvetica", "", 8.0)
        self.set_text_color(51, 65, 85) # Slate 700
        self.cell(4, 3.2, "-", ln=False)
        self.multi_cell(0, 3.2, text)
        self.ln(0.3)

    def add_skills(self, skills_dict):
        category_mapping = {
            "aiEngineering": "AI Engineering",
            "languagesCore": "Languages & Frameworks",
            "cloudDevOps": "Cloud & Infrastructure",
            "enterpriseAutomation": "Enterprise Automation"
        }
        for category_key, category_name in category_mapping.items():
            list_items = skills_dict.get(category_key, [])
            if not list_items:
                continue
            names = [item.get("name") for item in list_items if item.get("name")]
            self.set_font("Helvetica", "B", 8.0)
            self.set_text_color(51, 65, 85)
            self.cell(38, 3.2, f"{category_name}: ", ln=False)
            self.set_font("Helvetica", "", 8.0)
            self.set_text_color(71, 85, 105)
            self.multi_cell(0, 3.2, ", ".join(names))
            self.ln(0.3)

    def add_education_item(self, school, program, dates, details):
        self.set_font("Helvetica", "B", 8.8)
        self.set_text_color(15, 23, 42)
        self.cell(140, 3.8, f"{school}  -  {program}", ln=False)
        self.set_font("Helvetica", "B", 8.2)
        self.set_text_color(71, 85, 105)
        self.cell(0, 3.8, dates, ln=True, align="R")
        
        self.set_font("Helvetica", "", 8.0)
        self.set_text_color(71, 85, 105)
        self.multi_cell(0, 3.2, details)
        self.ln(0.8)

def load_portfolio_data():
    # Execute node to load the ES module portfolioData.js and print as JSON
    script_path = os.path.dirname(os.path.abspath(__file__))
    workspace_root = os.path.dirname(script_path) if os.path.basename(script_path) == "src" else script_path
    
    cmd = [
        "node",
        "-e",
        "import('./src/data/portfolioData.js').then(m => console.log(JSON.stringify(m.portfolioData)))"
    ]
    res = subprocess.run(cmd, cwd=workspace_root, capture_output=True, text=True, check=True)
    return json.loads(res.stdout)

def build_resume():
    try:
        data = load_portfolio_data()
    except Exception as e:
        print(f"Error loading portfolio data: {e}", file=sys.stderr)
        return
        
    personal_info = data.get("personalInfo", {})
    experiences = data.get("experience", [])
    skills = data.get("skills", {})
    education = data.get("education", [])

    pdf = ResumePDF()
    pdf.add_header(personal_info)
    
    # 1. Summary
    pdf.add_section_header("Summary")
    summary_text = personal_info.get("bio", "")
    pdf.set_font("Helvetica", "", 8.0)
    pdf.set_text_color(51, 65, 85)
    pdf.multi_cell(0, 3.2, summary_text)
    pdf.ln(1.8)

    # 2. Experience
    pdf.add_section_header("Experience")
    
    # We will combine consecutive FedEx Ground Area/Operations roles if they clutter the page,
    # or just list them all. Since we optimized the spacing (font sizes 8.0, line height 3.2),
    # listing them all fits beautifully on a single page!
    for exp in experiences:
        company = exp.get("company")
        role = exp.get("role")
        period = exp.get("period")
        bullets = exp.get("bullets", [])
        
        pdf.add_job_header(company, role, period)
        for bullet in bullets:
            pdf.add_bullet(bullet)
        pdf.ln(0.8)

    # 3. Skills
    pdf.add_section_header("Skills")
    pdf.add_skills(skills)
    pdf.ln(1.2)

    # 4. Education
    pdf.add_section_header("Education")
    for edu in education:
        school = edu.get("school")
        program = edu.get("program")
        dates = edu.get("period")
        details = edu.get("details", "")
        pdf.add_education_item(school, program, dates, details)

    # Output paths
    workspace_root = os.path.dirname(os.path.abspath(__file__))
    pdf.output(os.path.join(workspace_root, "andrew_baxter_resume.pdf"))
    pdf.output(os.path.join(workspace_root, "assets", "images", "andrew_baxter_resume.pdf"))
    pdf.output(os.path.join(workspace_root, "public", "andrew_baxter_resume.pdf"))
    print("Resume PDF generated dynamically from portfolioData.js successfully!")

if __name__ == "__main__":
    build_resume()
